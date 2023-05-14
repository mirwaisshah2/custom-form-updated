import Dexie from 'dexie'

const db = new Dexie('customForm');
db.version(1).stores({ forms: '++id, &code, title, *data' });

export default db;