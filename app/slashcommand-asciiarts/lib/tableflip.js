import { Meteor } from 'meteor/meteor';

import { slashCommands } from '../../utils';
/*
 * Tableflip is a named function that will replace /Tableflip commands
 * @param {Object} message - The message object
 */

function Tableflip(command, params, item) {
	if (command === 'tableflip') {
		const msg = item;
		msg.msg = `${params} (鈺扳枴擄錛夆曒鋦?鈹燴攣鈹籤;
		Meteor.call('sendMessage', msg);
	}
}

slashCommands.add('tableflip', Tableflip, {
	description: 'Slash_Tableflip_Description',
	params: 'your_message_optional',
});
