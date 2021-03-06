import React from 'react';
import Template from './Template';
import { hasRole } from '../../modules/auth';
import UpdateCreationForm from '../organisms/UpdateCreationForm';
import MainContainer from '../molecules/MainContainer';
import { getCreation } from '../../modules/auth';

const idCreation = window.location.href.split('/').pop();

class UpdateCreationPage extends React.Component {
    state = {auth:false, loaded:false}

	async componentDidMount() {
        document.title = "Modifier création";
        this.setState({creation: await getCreation(idCreation)})
		this.setState({auth: await hasRole("CREATEUR")})
        this.setState({loaded: true})
	}

	render(){
		if (this.state.auth)
			return (
				<div>
					<Template>
                        <MainContainer title="MODIFIER CRÉATION">
                            {this.state.creation.map((c) =>
							    <UpdateCreationForm titre={c.titre} fichier={c.nomfichier} desc={c.description} idCreation={idCreation} />
                            )}
						</MainContainer>
					</Template>
				</div> 
			)
			
		if (this.state.loaded)
            window.location="/"
            return <React.Fragment />
	}
}
	
export default UpdateCreationPage