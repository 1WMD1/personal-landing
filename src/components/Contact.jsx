import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">💌 联系我们</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>想对我们说点什么吗？</h3>
            <p>
              这是我们的私密空间，记录着我们的点点滴滴。
              如果你有任何想对我们说的话，欢迎联系。
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>邮箱</h4>
                  <p>250881854@qq.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>电话</h4>
                  <p>+86 150 8917 9596</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>地址</h4>
                  <p>安徽，合肥</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
