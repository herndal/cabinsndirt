# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  zipcode         :string           not null
#  bio             :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :session_token, :password_digest, presence: true
  validates :fname, presence: { message: "Please enter first name" }
  validates :lname, presence: { message: "Please enter last name" }
  validates :email, presence: { message: "Email is required" }
  validates :email, uniqueness: { message: "That email has been taken"}
  validates :zipcode, presence: { message: "Please enter a zipcode" }
  validates :password, presence: { message: "Please enter a password" }, on: :create
  validates :password, length: {
    minimum: 6,
    maximum: 72,
    allow_nil: true,
    too_short: "Password must be at least 6 characters long",
    too_long: "Password cannot be longer than 72 characters"
  }

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_session_token unless self.session_token
  end

  def generate_session_token
    st = SecureRandom.urlsafe_base64
    while User.find_by(session_token: st)
      st = SecureRandom.urlsafe_base64
    end
    self.session_token = st
  end

end
