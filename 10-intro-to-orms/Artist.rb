class Artist
  attr_reader :name, :id

  def initialize(id: nil, name:)
    @id = id
    @name = name
  end

  def self.all
    artist_hashes = DB.execute "SELECT * FROM artists;"
    artist_hashes.map { |artist_hash| parse_hash(artist_hash) }
  end

  def self.parse_hash(artist_hash)
    Artist.new(id: artist_hash["id"], name: artist_hash["name"])
  end

  def save
    if @id == nil
      query = <<-SQL
        INSERT INTO artists (name)
        VALUES (?);
      SQL
      DB.execute(query, @name)
      Artist.last
    else
      self
    end
  end

  def self.last
    artist_hash = DB.execute("SELECT * FROM artists ORDER BY id DESC LIMIT 1;").first
    parse_hash(artist_hash)
  end

  def self.create(name:)
    artist = Artist.new(name: name)
    artist.save
  end

  def self.find(id)
    query = <<-SQL
      SELECT * FROM artists
      WHERE id = (?)
      LIMIT 1;
    SQL
    artist_hash = DB.execute(query, id).first
    parse_hash(artist_hash)
  end

  def self.find_one_by_name(name)
    query = <<-SQL
      SELECT * FROM artists
      WHERE name = (?)
      LIMIT 1;
    SQL
    artist_hash = DB.execute(query, name).first
    parse_hash(artist_hash)
  end

  def destroy
    query = <<-SQL
      DELETE FROM artists WHERE id = (?);
    SQL
    DB.execute(query, @id)
  end

  def name=(new_name)
    @name = new_name
    query = <<-SQL
      UPDATE artists
      SET name = (?)
      WHERE id = (?);
    SQL
    DB.execute(query, new_name, @id)
  end

  def tracks
    query = <<-SQL
      SELECT * FROM tracks WHERE artist_id = (?);
    SQL
    DB.execute(query, @id)
  end

end
