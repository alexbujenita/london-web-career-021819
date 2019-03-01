class Artist < ActiveRecord::Base
  has_many :tracks
  has_many :fanships
  has_many :fans, through: :fanships

  def create_track(title)
    Track.create(title: title, artist_id: self.id)
  end
end
