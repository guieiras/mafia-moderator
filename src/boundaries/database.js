import Dexie from 'dexie';

const db = new Dexie('mafia-moderator');

db.version(1).stores({
  players: 'id'
});

export default db;
