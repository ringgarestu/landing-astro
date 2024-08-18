import React from "react";
import { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Breadcrumbs, BreadcrumbItem, Link, Avatar, Textarea } from "@nextui-org/react";

const FAQ = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const defaultContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, odit in illum dolores veritatis asperiores ex vero adipisci atque qui molestias officiis accusamus explicabo excepturi ratione rerum ad repudiandae beatae!";
  return (
    <div className="min-h-screen bg-[#ffffff] flex justify-center items-center">
      <div className="w-2/3 h-2/4 bg-[#006676] rounded p-6">
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link to="/landingpage" className="text-white font-bold">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem className="text-white font-bold">FAQ</BreadcrumbItem>
        </Breadcrumbs>
        <div className="flex justify-around items-center my-4">
          <p className="text-white font-bold text-2xl">FAQ</p>
          <p className="text-white font-bold text-2xl">Feedback</p>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-2/3">
            <Accordion variant="splitted">
              <AccordionItem key="1" aria-label="Accordion 1" title="Lorem Ipsum">
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Lorem Ipsum">
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="3" aria-label="Accordion 3" title="Lorem Ipsum">
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-1/2 flex flex-col space-y-4">
            {users.slice(0, 2).map((user) => (
              <div key={user.id} className="flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <Avatar isBordered color="primary" src={user.avatar} />
                  <p className="ml-2 text-white font-bold">
                    {user.first_name} {user.last_name}
                  </p>
                </div>
                <Textarea
                  isReadOnly
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                  className="max-w-xs w-full text-white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
