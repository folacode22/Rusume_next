const {SkillType, ExperienceType, ProjectType,ClientType, DesignType,ArticleType} =require('./schema');
const {clients} = require('../DataSample');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
  } = require('graphql');

  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      projects: {
        type: new GraphQLList(ProjectType),
        resolve(parent, args) {
          return Project.find();
        },
      },
      project: {
        type: ProjectType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Project.findById(args.id);
        },
      },
      clients: {
        type: new GraphQLList(ClientType),
        resolve(parent, args) {
          // return Client.find();
          return clients;
        },
      },
      client: {
        type: ClientType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          //return Client.findById(args.id);
          return clients.find(client => client.id === args.id)
        },
      },
      Designs:{
        type: new GraphQLList(DesignType),
        resolve(parent, args) {
          return GraphicsProject.find();
        },
      },
      Design:{
        type: DesignType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return GraphicsProject.findById(args.id);
        },
      },
      articles:{
        type: new GraphQLList(ArticleType),
        resolve(parent, args) {
          return Article.find();
        },
      },
      article:{
        type: ArticleType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Article.findById(args.id);
        },
      },
      skills: {
        type: new GraphQLList(SkillType),
        resolve(parent, args) {
          return Skill.find();
        },
      },
      skill: {
        type: SkillType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Skill.findById(args.id);
        },
      },
      experiences: {
        type: new GraphQLList(ExperienceType),
        resolve(parent, args) {
          return Experience.find();
        },
      },
      experience: {
        type: ExperienceType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Experience.findById(args.id);
        },
      },
    },
  });

  module.exports = RootQuery ;