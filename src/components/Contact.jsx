import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">联系我</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>让我们一起合作吧！</h3>
            <p>
              如果你有任何问题或合作机会，欢迎随时联系我。
              我会尽快回复你的消息。
            </p>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>邮箱</h4>
                <p>example@email.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h4>电话</h4>
                <p>+86 138 0000 0000</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>地址</h4>
                <p>中国，北京</p>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="你的名字" required />
            <input type="email" placeholder="你的邮箱" required />
            <textarea placeholder="你的消息" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">
              发送消息
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
