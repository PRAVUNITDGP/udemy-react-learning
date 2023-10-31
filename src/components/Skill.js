
function Skill() {
    return (
      <div className="card">
        <Avatar/>
        	<div className="data">
            <Intro/>
            <SkillList/>
          </div>
      </div>

    );
}

function Avatar() {
    return <img className="avatar" src="logo192.png" alt= "pravakar"/>
}
function Intro() {
  return (
    <div>
      <h1>Pravakar Rao</h1>
      <p1>
				“If you're tired of wasting money on digital marketing only to end up frustrated with little to no results, perhaps I and my team can help.” Why we love it: This is a strong opener that’s bound to get qualified leads’ attention
			</p1>
    </div>
    )
}
function SkillList() {
  return (
    <div>
			<Skills/>
			<Skills/>
			<Skills/>
		</div>
  )
}

function Skills() {
	return(
		<div className="skills"> React 😊 </div>
	)
}

export default Skill;
