FactoryBot.define do
  factory :message do
    content   {Faker::Lorem.sentence}
    image     {File.open("#{Rails.root}/spec/images/download.jpeg")}
    user
    group
  end
end