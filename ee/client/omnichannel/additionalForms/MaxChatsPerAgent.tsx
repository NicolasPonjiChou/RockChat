import { NumberInput, Field } from '@rocket.chat/fuselage';
import React, { FC } from 'react';

import { useTranslation } from '../../../../client/contexts/TranslationContext';

const MaxChatsPerAgent: FC<{
	values: { maxNumberSimultaneousChat: number };
	handlers: { handleMaxNumberSimultaneousChat: () => void };
}> = ({ values, handlers }) => {
	const t = useTranslation();
	const { maxNumberSimultaneousChat } = values;
	const { handleMaxNumberSimultaneousChat } = handlers;

	return (
		<Field>
			<Field.Label>{t('Max_number_of_chats_per_agent')}</Field.Label>
			<Field.Row>
				<NumberInput value={maxNumberSimultaneousChat} onChange={handleMaxNumberSimultaneousChat} flexGrow={1} />
			</Field.Row>
		</Field>
	);
};

export default MaxChatsPerAgent;
