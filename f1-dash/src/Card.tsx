import { Carousel } from '@mantine/carousel';
import { Button, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CardsCarousel.module.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Meet the team
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
    'https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2025%2F02%2F23105302%2Flewis-hamilton-fred-vasseur-charles-leclerc-f1-75-launch-1.jpg',
    title: 'Ferrari',
    category: 'nature',
  },
  {
    image:
      'https://images.ctfassets.net/1fvlg6xqnm65/bAUvvzMOxIdOGuZOoFZ4t/f25a9f4f580917908d4949e2e583bbca/F1-75-Live-Wrap-IMAGE-2-NEW.jpg?w=3840&q=75&fm=webp',
    title: 'Mercedes',
    category: 'beach',
  },
  {
    image:
      'https://pbs.twimg.com/media/GkAmlJsW8AEAqgo?format=jpg&name=small',
    title: 'Red Bull Racing',
    category: 'nature',
  },
  {
    image:
    'https://www.motorsportweek.com/wp-content/uploads/2025/03/Lando-Norris-McLaren-Chinese-GP-3.webp',    
    title: 'Mclaren',
    category: 'nature',
  },
  {
    image:
      'https://www.autohebdo.fr/app/uploads/2025/09/DPPI_00125020_1874-753x494.jpg',
    title: 'Williams',
    category: 'tourism',
  },
  {
    image:
      'https://assets.astonmartinf1.com/public/cms/5iK4tAThEF0iHNm3AnMpPX/149d6fdded5ea4588005e0d9d70d4d07/Driver_squad_2800x1600_2.jpg?&h=849&w=1440&fm=jpg&fit=thumb',
    title: 'Aston Martin',
    category: 'nature',
  },
];

export function CardsCarousel() {
//   const theme = useMantineTheme();
//   const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      // slideSize={{ base: '100%', sm: '50%' }}
     // slideGap={2}
      // emblaOptions={{ align: 'start', slidesToScroll: mobile ? 1 : 2 }}
    >
      {slides}
    </Carousel>
  );
}