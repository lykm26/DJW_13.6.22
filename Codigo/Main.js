	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');

	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;

	function random(min, max) 
		{
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

	function randomRGB() 
		{
			return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
		}

	const bolas = [];

	while (bolas.length < 40) {
	const size = (5);
	const bola = new Bola( 
			random(0 + size,width - size),
			random(0 + size,height - size),
			random(-10,10),
			random(-10,10),
			randomRGB(),
			size);
		
			bolas.push(bola);
		}

	function loop() 
		{
			ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
			ctx.fillRect(0, 0,  width, height);

		for (const bola of bolas) 
			{
				bola.draw();
				bola.update();
				bola.collisionDetect(bolas);
			}

			requestAnimationFrame(loop);
		}

	loop();
