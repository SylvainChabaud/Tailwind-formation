import { graphql } from 'react-relay';

const QGroupsQuery = graphql`
  query QGroupsQuery {
    getGroups {
      ok
      error
      groups
    }
  }
`;

export { QGroupsQuery };
