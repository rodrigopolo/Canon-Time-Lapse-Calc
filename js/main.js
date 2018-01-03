function gv(v){
	return parseInt($('#'+v).val());
}

$("#calc").click(function(){

	var cd = gv('cd'),
		ch = gv('ch'),
		cm = gv('cm'),
		cs = gv('cs'),

		ph = gv('ph'),
		pm = gv('pm'),
		ps = gv('ps'),
		pfr = gv('pfr'),
		sha = gv('sha'),
		wrn = '';

	// Total Capture Time
	var tcs = (cd*86400)+(ch*3600)+(cm*60)+cs;

	// Total Playback Time
	var tps = (ph*3600)+(pm*60)+ps;

	// Total Frames needed
	var shots = tps * pfr;

	// Interval in seconds
	var intsec = tcs/shots;

	var exposure = intsec/sha;

	// Warning
	if(shots>3600){
		wrn = ', some Canon cameras cannot take more than 3600 shots';
	}else{
		wrn = '';
	}

	$('#res').html('You have to take '+shots+' shots every '+intsec.toFixed(2)+' seconds with an exposure of '+exposure.toFixed(2)+' seconds'+wrn+'.');
	$('#res').fadeIn('slow');
});