class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :body
      t.string :reviewer
      t.references :movie, foreign_key: true

      t.timestamps
    end
  end
end
