class Bola {

   constructor(x, y, velX, velY, color, size)
	{
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
	}
   

	draw() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.size, 1, 90 * Math.PI);
		ctx.fill();
	}


	update() 
		{
			if ((this.x + this.size) >= width) 
				{
					this.velX = -(this.velX);
				}

			if ((this.x - this.size) <= 0) 
				{
					this.velX = -(this.velX);
				}

			this.x += this.velX;
		}
			collisionDetect(Bolas) 
				{
				for (var bola of Bolas) 
					{
						if (!(this === bola)) 
						{
							const dx = this.x - bola.x;
							const dy = this.y - bola.y;
							const distance = Math.sqrt(dx * dx + dy * dy);

						if (distance < this.size + bola.size) 
					{
					bola= this.color = randomRGB();
				}
			}
		}
   }

}
