import React from "react";
import userData from "../constants/userData";
import InstagramIcon from "../public/instagram.svg";
import LinkedinIcon from "../public/linkedin.svg";
import GithubIcon from "../public/github.svg";

export default function Footer() {
    return (
        <div className="bg-blue-200 dark:bg-gray-900">
            <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
                <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
                    <div>
                        <p>&copy; Dax Wann. All Rights Reserved.</p>
                    </div>
                    <div className="space-x-4 flex flex-row items-center">
                        <a
                            href={userData.socialLinks.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="text-base font-normal text-gray-600 dark:text-gray-300"
                        >
                            <InstagramIcon viewBox="0 0 16 16" className="bi bi-instagram h-5 w-5"/>
                        </a>
                        <a
                            href={userData.socialLinks.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-base font-normal text-gray-600 dark:text-gray-300"
                        >
                            <GithubIcon viewBox="0 0 16 16" className="bi bi-github h-6 w-6"/>
                        </a>
                        <a
                            href={userData.socialLinks.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-base font-normal text-gray-600 dark:text-gray-300"
                        >
                            <LinkedinIcon viewBox="0 0 16 16" className="bi bi-linkedin h-5 w-5"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
