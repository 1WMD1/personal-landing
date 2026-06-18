import './Skills.css'

const skills = [
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'JavaScript', level: 95, icon: '📜' },
  { name: 'Node.js', level: 85, icon: '🟢' },
  { name: 'CSS/Tailwind', level: 88, icon: '🎨' },
  { name: 'TypeScript', level: 80, icon: '🔷' },
  { name: 'Python', level: 75, icon: '🐍' },
  { name: 'Git', level: 85, icon: '📦' },
  { name: 'Docker', level: 70, icon: '🐳' },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">技能</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
