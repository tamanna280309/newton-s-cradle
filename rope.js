class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		
		var Anchor1x=pointA.x;
		var Anchor1y=pointA.y;

		var Anchor2x=pointB.x + this.offsetX;
		var Anchor2y=pointB.y + this.offsetY;

line (Anchor1x, Anchor1y,Anchor2x ,Anchor2y);

	}

}