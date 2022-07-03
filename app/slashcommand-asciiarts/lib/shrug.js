import { Meteor } from 'meteor/meteor';

import { slashCommands } from '../../utils';
/*
 * Shrug is a named function that will replace /shrug commands
 * @param {Object} message - The message object
 */

function Shrug(command, params, item) {
	if (command === 'shrug') {
		const msg = item;
		msg.msg = `${params} 爐\\_(肆?_/爐`;
		Meteor.call('sendMessage', msg);
	}
}

slashCommands.add('shrug', Shrug, {
	description: 'Slash_Shrug_Description',
	params: 'your_message_optional',
});
