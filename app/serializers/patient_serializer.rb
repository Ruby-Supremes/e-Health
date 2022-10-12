class PatientSerializer < ActiveModel::Serializer
  attributes :id, :username, :address, :date_of_birth, :nationality, :occupation, :allergies :password_digest
end
