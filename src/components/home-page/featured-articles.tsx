import Card from './../card';
import { Flex, List, Heading, ListItem, ListIcon, Divider  } from '@chakra-ui/react';
import {MdCheckCircle} from 'react-icons/md';

interface FeaturedArticlesProps {
  title: string;
}

const Item = ({children}) => (
  <ListItem color="brand.grey">
    {children}
  </ListItem>
)

export default function FeaturedArticles({title}: FeaturedArticlesProps) {
  return (
    <Card minH={300} mx={5}>
      <Flex direction="column">
        <Heading as="h2" color="brand.grey" size="md" textAlign="center">{title}</Heading>
        <Divider color="brand.orange" my={5}/>
        <List spacing={3}>
          <Item>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Item>
          <Item>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </Item>
          {/* You can also use custom icons from react-icons */}
          <Item>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </Item>
        </List>
      </Flex>
    </Card>
  )
}