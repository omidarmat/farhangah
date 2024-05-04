import styled from "styled-components";

const LogoSubtitle = styled.p`
  color: var(--color-grey-500);
  font-weight: 700;
`;

function Logo() {
  return (
    <div>
      <img src="../../public/logo/farhangah-logo.png" alt="Farhangah logo" />
      <LogoSubtitle>پلتفرم اطلاع‌رسانی اخبار و رویدادهای فرهنگی</LogoSubtitle>
    </div>
  );
}

export default Logo;
