(function($)
{
	$.fn.menuHighlight=function(options)
	{

		var defauts =
		{
			"onglet" : ".onglet"
		}

		var parametres=$.extend(defauts, options);

		this.each(function()
		{
			var element = $(this);
			var urlTmp = document.location.href.split('/');
			var urlSite = urlTmp[urlTmp.length - 1];
			var urlSousNav = $(parametres.onglet + ' li:first-child a').attr('href');

			element.find('a').each(function() {

				var url = $(this).attr('href');

				if (urlSite == url || urlSousNav == url) {
					$(this).parents('li').addClass('active');
				}

			});

			$(parametres.onglet).find('a').each(function() {

				var url = $(this).attr('href');

				if (urlSite == url) {
					$(this).addClass('active');
				}

			});

		});

		return this;
	}
})(jQuery);