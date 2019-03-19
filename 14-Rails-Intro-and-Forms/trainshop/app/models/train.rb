class Train < ApplicationRecord
  def choo_choo
    "chooo choooo chooo, I am #{self.name}"
  end
end
