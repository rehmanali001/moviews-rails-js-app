class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
