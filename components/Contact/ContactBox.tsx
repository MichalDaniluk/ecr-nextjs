type Props = {
	street:string,
	city:string,
	email:string,
	phone:string,
	time:string
}

const ContactBox:React.FC<Props> = ({street, city, email, phone, time}) => {
	return(
		<div className="loction-info white pb-12">
              <p className="text-white">{street}<br />{city}</p>
              <p className="text-white">{email}</p>
              <p className="text-white">{phone}</p>
              <p className="text-white">Godziny pracy: {time}</p>
              <a className="drop-shadow-lg border-2 bg-white border-dark pt-1 pb-1 mt-4 block text-darkblue rounded-2xl text-sm text-center" href="http://e-rejestracja.info.pl/ecr">Zarejestruj się</a>
            </div>
	)
}

export default ContactBox
