import './Skills.css'

const skills = [
  { name: 'C/C++', level: 95, icon: '⚡' },
  { name: '嵌入式 Linux', level: 90, icon: '🐧' },
  { name: 'RTOS', level: 88, icon: '⏱️' },
  { name: 'ARM 架构', level: 85, icon: '🔧' },
  { name: 'Python', level: 85, icon: '🐍' },
  { name: 'AI/机器学习', level: 80, icon: '🤖' },
  { name: '硬件设计', level: 75, icon: '🔌' },
  { name: '物联网 IoT', level: 82, icon: '📡' },
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
