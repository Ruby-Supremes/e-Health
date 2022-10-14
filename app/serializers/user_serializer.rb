class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :address, :gender, :age, :nationality, :occupation, :allergies, :password_digest
end
