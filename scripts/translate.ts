const translations = {
	1: {
		'pt-BR': 'Alô?',
		en: 'Hello?'
	},
	2: {
		'pt-BR': 'Tem alguém aí?',
		
	}
}

const language = navigator.language || (navigator as any).userLanguage;

export function Transltr() {

	$('[transltr]').each(function () {

		const index = $(this).attr('transltr');

		const text = translations[index][language] || translations[index].en;

		$(this).text(text);
	});
}