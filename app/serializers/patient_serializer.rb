class PatientSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :age
end
