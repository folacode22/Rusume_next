const Client = require('../models/User')
const Project = require('../models/Project')
const Design = require('../models/GraphicsProject')
const Experience = require('../models/Experience')
const Skill = require('../models/Skill')
const Article = require('../models/Article')


const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
  } = require('graphql');

  

// Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      
    }),
  });



  // Project Type
  const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      GitHub: { type: GraphQLString},
      client: {
        type: ClientType,
        resolve(parent, args) {
          return client.findById(parent.client);
        },
      },
    }),
  });
  
  // Graphic Type
  const DesignType = new GraphQLObjectType({
    name: 'Design',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      imageUrl: { type: GraphQLString },
      client: {
        type: ClientType,
        resolve(parent, args) {
          return client.findById(parent.client);
        },
      },
      
    }),
  });
  
  //Experience Type
const ExperienceType = new GraphQLObjectType({
    name: 'Experience',
    fields: () => ({
      id: { type: GraphQLID },
      company: { type: GraphQLString },
      jobTitle: { type: GraphQLString },
      dates: { type: GraphQLString },
      client: {
        type: ClientType,
        resolve(parent, args) {
          return client.findById(parent.client);
        },
      },
    }),
  });

//   Articles Type
const ArticleType = new GraphQLObjectType({ 
    name: 'Article',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        summary: { type: GraphQLString },
        articleUrl: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                return client.findById(parent.client);
            },
        },
    }),
});


//   Skill Type
  const SkillType = new GraphQLObjectType({ 
    name: 'Skill',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        level: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                return client.findById(parent.client);
            },
        },
    }),
});



module.exports = {SkillType, ExperienceType, ProjectType,ClientType, DesignType,ArticleType}


