import { version } from '../../package.json';
import { Router } from 'express';
import MessageResource from './MessageResource';

export default ({ config, db }) => {
	let api = Router();

	api.use('/messages', MessageResource({ config, db }));

	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
