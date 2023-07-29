import fs from 'fs';
import path from 'path';

import { Pool } from 'mysql2/promise';
import connection from './src/models/connection';

export default async function restoreDatabase(conn: Pool) {
  try {
    const filePath = path.resolve(__dirname, 'Trybesmith.sql');
    const fileContent = fs.readFileSync(filePath).toString();
    const queries = fileContent.split(';').filter((p) => p.trim());
    for (let i = 0; i < queries.length; i += 1) { 
      const query = queries[i];
      // eslint-disable-next-line no-await-in-loop
      await conn.query(query);
    }
    console.log('Banco de dados restaurado com sucesso');
  } catch (error) {
    console.log('Falha ao restaurar o banco de dados', error);
  } 
}

if (require.main === module) {
  restoreDatabase(connection)
    .then(async () => {
      await connection.end();
      process.exit(0);
    });
}