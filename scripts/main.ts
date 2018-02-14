const cards = [{
	template: 'card-template-who-am-i',
	title: 'Meu nome é Anacleto, Rhoger Anacleto',
	body: '21 anos. Joinville, Brasil. Desenvolvedor.'
}, {
	template: 'card-template-options-about-me',
	title: 'Rhoger Anacleto, como é que eu posso explicar Rhoger Anacleto?',
	opinions: [
		'O Rhoger Anacleto é perfeito!',
		'Ele tem duas bolsas de pele e um carro importado prateado',
		'O cabelo dele está no seguro por US$10.000,00',
		'Soube que ele faz comerciais de carro… no Japão',
		'O filme que ele gosta mais é Marcação Cerrada',
		'Ele até conheceu o John Stamos no avião… E ele disse que ele era lindo',
		'Um dia, ele me socou no rosto… isso foi irado',
	]
}];

var languages = [{
	name: 'Javascript',
	xp: 100,
	width: 0,
	class: ''
}, {
	name: 'CSS',
	xp: 100,
	width: 0,
	class: ''
}, {
	name: 'HTML',
	xp: 100,
	width: 0,
	class: ''
}, {
	name: 'NodeJS',
	xp: 96,
	width: 0,
	class: ''
}, {
	name: 'Angular',
	xp: 90,
	width: 0,
	class: ''
}, {
	name: 'TypeScript',
	xp: 87,
	width: 0,
	class: ''
}, {
	name: 'C#',
	xp: 70,
	width: 0,
	class: ''
}, {
	name: 'EmberJS',
	xp: 60,
	width: 0,
	class: ''
}, {
	name: 'LESS',
	xp: 70,
	width: 0,
	class: ''
}, {
	name: 'GIT',
	xp: 90,
	width: 0,
	class: ''
}, {
	name: 'SQL',
	xp: 95,
	width: 0,
	class: ''
}, {
	name: 'C++',
	xp: 10,
	width: 0,
	class: ''
}, {
	name: 'PHP',
	xp: 40,
	width: 0,
	class: ''
}, {
	name: 'Java',
	xp: 30,
	width: 0,
	class: ''
}, {
	name: 'MongoDB',
	xp: 85,
	width: 0,
	class: ''
}, {
	name: 'GraphQL',
	xp: 20,
	width: 0,
	class: ''
}, {
	name: '.NET',
	xp: 50,
	width: 0,
	class: ''
}, {
	name: 'Selenium',
	xp: 40,
	width: 0,
	class: ''
}, {
	name: 'Photoshop',
	xp: 60,
	width: 0,
	class: ''
}, {
	name: 'shell',
	xp: 20,
	width: 0,
	class: ''
}];

const chars = '1234567890!@#$%&*()qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

$(function () {

	var maxXP = languages.reduce((p, c) => p.xp > c.xp ? p : c).xp;

	var sumXP = languages.map(language => language.xp).reduce((sum, xp) => sum + xp);

	$('.sum-xp', $('#card-languade-xp')).text(sumXP + 'XP');

	$.get('https://www.instagram.com/rhogeranacleto?__a=1').then(r => {

		var media = r.user.media.nodes[0];

		$('#card-instagram').find('img').attr('src', media.display_src).end().find('div').text(media.caption);

		languages.sort((a, b) => b.xp - a.xp);

		languages.forEach(language => {

			language.width = 100 * (language.xp / maxXP);

			language.class = `xp-bar-fill-${parseInt(((language.width / 20) + 1).toString())}`;

			$('.body', $('#card-languade-xp')).append(Mustache.render($('#card-languade-xp-template').html(), language));
		})

		$('.card').each((i, card) => {

			var columnsContents = $('.column-content');
			$(columnsContents.get().reduce((e, i) => e.offsetHeight > i.offsetHeight ? i : e, columnsContents.get(0))).append(card);
		});

		var letterWidth = $('.bg', $('#content')).width();
		var letterHeight = $('.bg', $('#content')).height();

		const count = Math.floor($(document).width() / 8) * ((Math.floor($('#content').height() / 20)) + 1);

		console.log(count, ((Math.floor($('#content').height() / 15)) + 1));

		var string = '';

		for (let i = 0; i < count; i++) {

			string += chars.charAt(Math.floor(Math.random() * chars.length));;
		}

		$('.bg', $('#content')).html(string);
	});
});