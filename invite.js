document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('navigation-container');

    // 异步加载 JSON 数据
    async function loadNavigationData() {
        try {
            const response = await fetch('invite.data.js');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            renderNavigation(data);
        } catch (error) {
            console.error('无法加载导航数据:', error);
            container.innerHTML = '<p style="text-align: center; color: var(--muted-text-color);">无法加载导航链接，请检查 invite.json 文件是否存在且格式正确。</p>';
        }
    }

    // 渲染导航链接
    function renderNavigation(inviteGroup) {
        if (!inviteGroup) {
            container.innerHTML = '<p style="text-align: center; color: var(--muted-text-color);">暂无导航链接。</p>';
            return;
        }

        // 清空容器
        container.innerHTML = '';

        if (!inviteGroup) {
            container.innerHTML = '<p style="text-align: center; color: var(--muted-text-color);">未找到邀请链接。</p>';
            return;
        }


        // 创建分组容器
        const groupContainer = document.createElement('div');
        groupContainer.className = 'group-container';

        // 创建分组标题
        const groupTitle = document.createElement('h2');
        groupTitle.textContent = inviteGroup.groupName;
        groupContainer.appendChild(groupTitle);

        // 创建链接网格
        const linksGrid = document.createElement('div');
        linksGrid.className = 'links-grid';

        inviteGroup.links.forEach(link => {
            const linkCard = document.createElement(link.url ? 'a' : 'div');
            linkCard.className = 'link-card';
            if(link.url) {
                linkCard.href = link.url;
                linkCard.target = '_blank';
                linkCard.rel = 'noopener noreferrer';
            }

            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';

            // LOGO
            const cardLogo = document.createElement('img');
            cardLogo.className = 'card-logo';
            cardLogo.src = link.logo;
            cardLogo.alt = `${link.name} Logo`;

            // 文本内容
            const cardText = document.createElement('div');
            cardText.className = 'card-text';

            const cardName = document.createElement('h3');
            cardName.className = 'card-name';
            cardName.textContent = link.name;

            const cardDescription = document.createElement('p');
            cardDescription.className = 'card-description';
            cardDescription.textContent = link.description;

            // 组装
            cardText.appendChild(cardName);
            cardText.appendChild(cardDescription);

            cardContent.appendChild(cardLogo);
            cardContent.appendChild(cardText);

            linkCard.appendChild(cardContent);
            linksGrid.appendChild(linkCard);
        });

        groupContainer.appendChild(linksGrid);
        container.appendChild(groupContainer);
    }

    // 初始化
    loadNavigationData();
});
