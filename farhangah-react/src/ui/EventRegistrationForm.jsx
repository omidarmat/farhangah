import { useForm } from "react-hook-form";

function EventRegistrationForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">نام رویداد</label>
        <input id="title" type="text" {...register("title")} />
      </div>
      <div>
        <p>تاریخ آغاز رویداد:</p>
      </div>
      <div>
        <label htmlFor="startDateDay">روز</label>
        <input id="startDateDay" type="number" {...register("startDateDay")} />
      </div>
      <div>
        <label htmlFor="startDateMonth">ماه</label>
        <input
          id="startDateMonth"
          type="number"
          {...register("startDateMonth")}
        />
      </div>
      <div>
        <label htmlFor="startDateYear">سال</label>
        <input
          id="startDateYear"
          type="number"
          {...register("startDateYear")}
        />
      </div>
      <div>
        <p>تاریخ پایان رویداد:</p>
      </div>

      <div>
        <label htmlFor="endDateDay">روز</label>
        <input id="endDateDay" type="number" {...register("startDateDay")} />
      </div>
      <div>
        <label htmlFor="endDateMonth">ماه</label>
        <input id="endDateMonth" type="number" {...register("endDateMonth")} />
      </div>
      <div>
        <label htmlFor="endDateYear">سال</label>
        <input id="endDateYear" type="number" {...register("endDateYear")} />
      </div>

      <div>
        <p>ساعت آغاز رویداد:</p>
      </div>
      <div>
        <label htmlFor="startTimeHour">ساعت</label>
        <input
          id="startTimeHour"
          type="number"
          {...register("startTimeHour")}
        />
      </div>
      <div>
        <label htmlFor="startTimeMinute">دقیقه</label>
        <input
          id="startTimeMinute"
          type="number"
          {...register("startTimeMinute")}
        />
      </div>

      <div>
        <p>ساعت پایان رویداد:</p>
      </div>
      <div>
        <label htmlFor="endTimeHour">ساعت</label>
        <input id="endTimeHour" type="number" {...register("endTimeHour")} />
      </div>
      <div>
        <label htmlFor="endTimeMinute">دقیقه</label>
        <input
          id="endTimeMinute"
          type="number"
          {...register("endTimeMinute")}
        />
      </div>

      <div>
        <label htmlFor="exeType">نوع رویداد</label>
        <select id="exeType" {...register("exeType")}>
          <option>حضوری</option>
          <option>آنلاین</option>
        </select>
      </div>
      <div>
        <label htmlFor="maxCapacity">حداکثر ظرفیت</label>
        <input id="maxCapacity" type="number" {...register("maxCapacity")} />
      </div>
      <div>
        <label htmlFor="registrationFee">هزینه ثبت نام در رویداد</label>
        <input
          id="registrationFee"
          type="number"
          {...register("registrationFee")}
        />
      </div>
      <div>
        <label htmlFor="discount">تخفیف</label>
        <input id="discount" type="number" {...register("discount")} />
      </div>

      <div>
        <input type="submit" value="ثبت رویداد" />
      </div>
    </form>
  );
}

export default EventRegistrationForm;
