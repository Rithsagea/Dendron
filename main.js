const { Client } = require('@notionhq/client');
const config = require('config');

const notion = new Client({
	auth: config.get('notion.key')
});

// (async () => {
//   const response = await notion.databases.retrieve({ database_id: config.get('notion.db.notes') });
//   console.log(JSON.stringify(response, null, 2));
// })();

(async () => {
	const response = await notion.databases.query({
		database_id: config.get('notion.db.notes')
	});
	console.log(JSON.stringify(response, null, 2));
})();