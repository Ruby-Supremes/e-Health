class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :address, :gender, :nationality, :occupation, :allergies, :password_digest
end
