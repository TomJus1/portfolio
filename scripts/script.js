function showCampaign(page) {
    window.location.href = page;
}

function openCampaign(campaign) {
    let assets = {
        campaign1: `<img src="https://miro.medium.com/v2/resize:fit:1400/1*uNCVd_VqFOcdxhsL71cT5Q.jpeg" class="img-fluid"><p>Campaign 1 details...</p>`,
        campaign2: `<img src="https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?cs=srgb&dl=pexels-ozgomz-2893685.jpg&fm=jpg" class="img-fluid"><p>Campaign 2 details...</p>`,
        campaign3: `<img src="https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg?cs=srgb&dl=pexels-pripicart-516927.jpg&fm=jpg" class="img-fluid"><p>Campaign 3 details...</p>`,
        campaign4: `<img src="https://imgv3.fotor.com/images/blog-cover-image/a-shadow-of-a-boy-carrying-the-camera-with-red-sky-behind.jpg" class="img-fluid"><p>Campaign 4 details...</p>`,
        campaign5: `<img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80" class="img-fluid"><p>Campaign 5 details...</p>`,
        campaign6: `<img src="https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg?cs=srgb&dl=pexels-pripicart-516927.jpg&fm=jpg" class="img-fluid"><p>Campaign 6 details...</p>`,
        campaign7: `<img src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?fm=jpg" class="img-fluid"><p>Campaign 7 details...</p>`,
        campaign8: `<img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg" class="img-fluid"><p>Campaign 8 details...</p>`,
        campaign9: `<img src="https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?cs=srgb&dl=pexels-ozgomz-2893685.jpg&fm=jpg" class="img-fluid"><p>Campaign 9 details...</p>`,
        campaign10: `<img src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" class="img-fluid"><p>Campaign 10 details...</p>`
    };

    document.getElementById('campaign-assets').innerHTML = assets[campaign] || "<p>No assets found.</p>";
    document.querySelector('.campaign-grid').style.display = 'none';
    document.getElementById('campaign-details').style.display = 'block';
}

function hideCampaign() {
    document.getElementById('campaign-details').style.display = 'none';
    document.querySelector('.campaign-grid').style.display = 'flex';
}
