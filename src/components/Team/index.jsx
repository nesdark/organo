import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Container, Divider } from './styles';
import { Collaborator } from '../Collaborator';

export function Team({ team, collaborators }) {
  return (
    collaborators.length > 0 && <Container $secondaryColor={team.secondaryColor}>
      <h3>{team.name}</h3>
      <Divider $primaryColor={team.primaryColor} />

      <Swiper
        // slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          648: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="collaborators"
      >
        {collaborators.map((collaborator) => {
          return (
            <SwiperSlide className="collaborator" key={collaborator.name}>
              <Collaborator
                name={collaborator.name}
                role={collaborator.role}
                image={collaborator.image}
                $backgroundColor={team.primaryColor}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
