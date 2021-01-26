import SiteSetting from ".././Constants/SiteSetting";

function Footer(props) {
  return (
    <>
      <div class="copyright">
        <div class="container">
          <div class="col-md-6">
            {SiteSetting.SiteSetting[0].Copyright_text}
          </div>
          <div class="col-md-6 text-right">
          {SiteSetting.SiteSetting[0].Design_by}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
