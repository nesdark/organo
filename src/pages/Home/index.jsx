import { Banner } from '../../components/Banner/index.jsx';
import { Form } from '../../components/Form/index.jsx';
import { InputField } from '../../components/InputField/index.jsx';
import { SelectField } from '../../components/SelectField/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Team } from '../../components/Team/index.jsx';
import { Footer } from '../../components/Footer/index.jsx';

import { Container } from './styles.js';
import { useEffect, useState } from 'react';

export function Home() {
  const [teams, setTeams] = useState([
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    },
  ]);

  const [collaborators, setCollaborators] = useState(JSON.parse(localStorage.getItem('organo@collaborators'))  || [] );
  const [collaboratorName, setCollaboratorName] = useState('');
  const [collaboratorRole, setCollaboratorRole] = useState('');
  const [collaboratorImage, setCollaboratorImage] = useState('');
  const [collaboratorTeam, setCollaboratorTeam] = useState('');

  function handleCreateCollaborator() {
    if (collaboratorName === '') {
      alert('Insira um nome!');
      return;
    }

    if (collaboratorRole === '') {
      alert('Insira um cargo!');
      return;
    }

    if (collaboratorImage === '') {
      alert('Insira uma imagem!');
      return;
    }

    if (collaboratorTeam === '') {
      alert('Selecione um time!');
      return;
    }

    const newCollaborator = {
      name: collaboratorName,
      role: collaboratorRole,
      image: collaboratorImage,
      team: collaboratorTeam,
    };

    setCollaborators((prevState) => [...prevState, newCollaborator]);
    setCollaboratorName('')
    setCollaboratorRole('')
    setCollaboratorImage('')
    setCollaboratorTeam('')
  }

  useEffect(() => {
    localStorage.setItem('organo@collaborators', JSON.stringify(collaborators))
  }, [collaborators])

  useEffect(() => {})

  return (
    <Container>
      <Banner />
      <main>
        <Form
          title="
      Preencha os dados para criar o card do colaborador"
        >
          <InputField
            title="Nome"
            type="text"
            placeholder="Ex.: Paulo"
            required
            value={collaboratorName}
            onChange={(e) => setCollaboratorName(e.target.value)}
          />
          <InputField
            title="Cargo"
            type="text"
            placeholder="Ex.: Instrutor"
            required
            value={collaboratorRole}
            onChange={(e) => setCollaboratorRole(e.target.value)}
          />
          <InputField
            title="Imagem"
            type="text"
            placeholder="Ex.: https://github.com/NOMEDOUSUARIO.png"
            required
            value={collaboratorImage}
            onChange={(e) => setCollaboratorImage(e.target.value)}
          />
          <SelectField
            title="Time"
            options={teams.map((team) => team.name)}
            required
            value={collaboratorTeam}
            onChange={(e) => setCollaboratorTeam(e.target.value)}
          />
          <Button
            title="Criar card"
            type="submit"
            onClick={handleCreateCollaborator}
          />
        </Form>

        {teams.map((team) => {
          const collaboratorsOfThisTeam = collaborators.filter(
            (collaborator) => collaborator.team === team.name
          );
          return (
            <Team
              team={team}
              key={team.name}
              collaborators={collaboratorsOfThisTeam}
            />
          );
        })}
      </main>
      <Footer />
    </Container>
  );
}
