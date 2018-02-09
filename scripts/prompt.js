var $lines = $('#prompt p');
$lines.hide();

var lineContents = new Array();

function executeEvent(event) {

	return events[event]();
}

var events = {
	minimise: function() {

		$('#prompt').addClass('minimised');
	},
	showSite: function() {

		$('main').removeClass('hide');
	},
	showColors: function() {

		$('head').append('<link rel="stylesheet" href="style/main.css">')
	},
	showFonts: function() {

		$('head').append('<link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i,900" rel="stylesheet">')
	},
	close: function() {

		$('#prompt').remove();
	}
};

var terminal = function() {

	typeLine = function(idx) {

		idx == null && (idx = 0);
		var element = $lines.eq(idx);
		var content = lineContents[idx];

		if (!content) {

			return;
		}

		var charIdx = 0;

		var skip = element.hasClass('skip');

		var typeChar = function() {

			var rand = element.attr('data-skip') ? Number(element.attr('data-skip')) : Math.round(Math.random() * 150) + 25;

			setTimeout(function() {

				var char = content[charIdx++];
				element.append(char);

				if (typeof char !== "undefined") {

					typeChar();
				} else {

					//element.append('<br/><span class="output">' + element.text().slice(9, -1) + '</span>');
					element.removeClass('active');

					var after = element.attr('data-after');

					if (after) {

						executeEvent(after);
					}

					typeLine(++idx);

					if ($('#prompt')[0]) {

						$('#prompt').scrollTop($('#prompt')[0].scrollHeight);
					}
				}
			}, skip ? 0 : rand);
		}

		//content = 'echo "' + content + '"';
		if (!skip || element.hasClass('ra')) {

			element.append('~$ ').addClass('active');
		}

		if (element.hasClass('ra')) {

			element.append('<span class="me">@rhogeranacleto diz: </span>');
		}

		var textBefore = element.attr('data-text-before');

		if (textBefore) {

			element.append(textBefore);
		}

		var wait = element.attr('data-wait');

		if (wait) {

			setTimeout(typeChar, Number(wait));
		} else {

			typeChar();
		}
	}

	$lines.each(function(i) {

		lineContents[i] = $(this).text();
		$(this).text('').show();
	});

	typeLine();
}

$(function() {

	terminal();
});