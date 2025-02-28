import React from "react";

const commentsData = [
  {
    id: 1,
    name: "Niketan Moon",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    id: 2,
    name: "Niketan Moon",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        id: 3,
        name: "Niketan Moon",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        id: 4,
        name: "Niketan Moon",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            id: 5,
            name: "Niketan Moon",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                id: 6,
                name: "Niketan Moon",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    id: 7,
                    name: "Niketan Moon",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        id: 8,
                        name: "Niketan Moon",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    id: 9,
                    name: "Niketan Moon",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Niketan Moon",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    id: 11,
    name: "Niketan Moon",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    id: 12,
    name: "Niketan Moon",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    id: 13,
    name: "Niketan Moon",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
