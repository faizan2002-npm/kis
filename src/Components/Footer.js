import SiteSetting from ".././Constants/SiteSetting";

function Footer(props) {
  return (
    <>
      <div className="copyright">
        <div className="container">
          <div className="col-md-6">
            {SiteSetting.SiteSetting[0].Copyright_text}
          </div>
          <div
            className="col-md-6 text-right"
            dangerouslySetInnerHTML={{
              __html: SiteSetting.SiteSetting[0].Design_by,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
