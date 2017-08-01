const Footer = document.createElement('footer');

const InnerFooterContainer = document.createElement('div');
InnerFooterContainer.className = 'innerFooterContainer';

const Name = document.createElement('span');
Name.innerHTML = 'Endre Vegh';
Name.className = 'name';

const LinkToGitHub = document.createElement('a');
LinkToGitHub.href = `https://www.google.com`;
LinkToGitHub.text = 'GitHub';

InnerFooterContainer.appendChild(Name);
InnerFooterContainer.appendChild(LinkToGitHub);

Footer.appendChild(InnerFooterContainer);

export default Footer
