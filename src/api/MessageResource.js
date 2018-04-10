import resource from 'resource-router-middleware';
import MessageService from '../services/MessageService';

export default ({ config, db }) => resource({

	index({ params }, res) {
		let body = MessageService.getMessages()
		res.json(body);
	}
});
