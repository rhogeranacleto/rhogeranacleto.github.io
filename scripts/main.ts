import { LANGUAGES } from "./languages";

// const chars = '1234567890!@#$%&*()qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
const chars = '01';

export function Create() {

	var maxXP = LANGUAGES.reduce((p, c) => p.xp > c.xp ? p : c).xp;

	var sumXP = LANGUAGES.map(language => language.xp).reduce((sum, xp) => sum + xp);

	$('.sum-xp', $('#card-languade-xp')).text(sumXP + ' XP');

	LANGUAGES.sort((a, b) => b.xp - a.xp);

	LANGUAGES.forEach(language => {

		language.width = 100 * (language.xp / maxXP);

		language.class = `xp-bar-fill-${parseInt(((language.width / 20) + 1).toString())}`;

		$('.body', $('#card-languade-xp')).append(Mustache.render($('#card-languade-xp-template').html(), language));
	})

	$('.card').each((i, card) => {

		var columnsContents = $('.column-content');
		$(columnsContents.get().reduce((e, i) => e.offsetHeight > i.offsetHeight ? i : e, columnsContents.get(0))).append(card);
	});

	const count = Math.floor($(document).width() / 8) * ((Math.floor($('#content').height() / 20)) + 1);

	var string = '';

	for (let i = 0; i < count; i++) {

		string += chars.charAt(Math.floor(Math.random() * chars.length));;
	}

	$('.bg', $('#content')).html(string);
	// });
}

console.log('What are you searching here? This code is public! Check out on https://github.com/rhogeranacleto/rhogeranacleto.github.io');